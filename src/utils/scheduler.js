/**
 * Scheduling Logic for Nepal Tax Portal
 */

// Mock Database State
let SYSTEM_CONFIG = {
  teamSize: 1, // Default 1 CA available
  slotDuration: 30 // minutes
};

// Mock Bookings Database (In-memory)
// Format: { id, date: 'YYYY-MM-DD', time: '10:00', type: 'online' }
let bookings = [];

export const getSystemConfig = () => SYSTEM_CONFIG;
export const updateTeamSize = (size) => { SYSTEM_CONFIG.teamSize = size; };

export const getBookings = (date) => {
    return bookings.filter(b => b.date === date);
};

export const addBooking = (booking) => {
    // Validate availability again before booking (race condition check in real app)
    const currentBookings = bookings.filter(b => b.date === booking.date && b.time === booking.time);
    if (currentBookings.length >= SYSTEM_CONFIG.teamSize) {
        throw new Error("Slot no longer available");
    }
    bookings.push({ ...booking, id: Date.now().toString() });
    return true;
};

// Generate Time Slots for a given day
export const generateTimeSlots = (date) => {
    const slots = [];
    let startHour = 10;
    let endHour = 17; // 5 PM
    
    // Create 30 min intervals
    for (let h = startHour; h < endHour; h++) {
        for (let m = 0; m < 60; m += 30) {
            const timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
            
            // Check availability
            const bookedCount = bookings.filter(b => b.date === date && b.time === timeStr).length;
            const isAvailable = bookedCount < SYSTEM_CONFIG.teamSize;
            
            slots.push({
                time: timeStr,
                available: isAvailable,
                bookedCount,
                capacity: SYSTEM_CONFIG.teamSize
            });
        }
    }
    return slots;
};
