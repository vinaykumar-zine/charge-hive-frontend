const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.token = localStorage.getItem('token');
    }

    // Helper method to get headers
    getHeaders() {
        const headers = {
            'Content-Type': 'application/json',
        };

        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        return headers;
    }

    // Helper method to handle API responses
    async handleResponse(response) {
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    // Authentication APIs
    async login(credentials) {
        const response = await fetch(`${this.baseURL}/auth/login`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(credentials),
        });

        const data = await this.handleResponse(response);
        if (data.token) {
            this.token = data.token;
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        console.log(data);
        return data;
    }

    async register(userData) {
        const response = await fetch(`${this.baseURL}/auth/register`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(userData),
        });
        return this.handleResponse(response);
    }

    async getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    async logout() {
        this.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    // Station APIs
    async getAllStations() {
        const response = await fetch(`${this.baseURL}/stations`, {
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    async getStationsByOwner(ownerId) {
        const response = await fetch(`${this.baseURL}/stations/get-station-by-owner`, {
            headers: {
                ...this.getHeaders(),
                'X-User-Id': ownerId,
            },
        });
        return this.handleResponse(response);
    }

    async createStation(stationData, ownerId) {
        const response = await fetch(`${this.baseURL}/stations`, {
            method: 'POST',
            headers: {
                ...this.getHeaders(),
                'X-User-Id': ownerId,
            },
            body: JSON.stringify(stationData),
        });
        return this.handleResponse(response);
    }

    async updateStation(stationId, stationData, ownerId) {
        const response = await fetch(`${this.baseURL}/stations/${stationId}`, {
            method: 'PUT',
            headers: {
                ...this.getHeaders(),
                'X-User-Id': ownerId,
            },
            body: JSON.stringify(stationData),
        });
        return this.handleResponse(response);
    }

    async deleteStation(stationId, ownerId) {
        const response = await fetch(`${this.baseURL}/stations/${stationId}`, {
            method: 'DELETE',
            headers: {
                ...this.getHeaders(),
                'X-User-Id': ownerId,
            },
        });
        return this.handleResponse(response);
    }

    async getUnapprovedStations() {
        const response = await fetch(`${this.baseURL}/stations/unapproved`, {
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    async approveStation(approvalData, adminId) {
        const response = await fetch(`${this.baseURL}/admin/stations/process-approval`, {
            method: 'POST',
            headers: {
                ...this.getHeaders(),
                'X-User-Id': adminId,
            },
            body: JSON.stringify(approvalData),
        });
        return this.handleResponse(response);
    }

    // User Management APIs
    async getAllUsers() {
        const response = await fetch(`${this.baseURL}/admin/users`, {
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    async getUserById(userId) {
        const response = await fetch(`${this.baseURL}/auth/get-by-id/${userId}`, {
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    async updateUser(userData, userId) {
        const response = await fetch(`${this.baseURL}/auth/edit-user`, {
            method: 'PUT',
            headers: {
                ...this.getHeaders(),
                'X-User-Id': userId,
            },
            body: JSON.stringify(userData),
        });
        return this.handleResponse(response);
    }

    // Admin APIs
    async getAuditLogs() {
        const response = await fetch(`${this.baseURL}/admin/audit-logs`, {
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    // Booking APIs (to be implemented when booking service is added)
    async getBookings() {
        // Placeholder for booking service integration
        return [];
    }

    async createBooking(/* bookingData */) {
        // Placeholder for booking service integration
        return {};
    }

    async updateBooking(/* bookingId, bookingData */) {
        // Placeholder for booking service integration
        return {};
    }

    async deleteBooking(/* bookingId */) {
        // Placeholder for booking service integration
        return {};
    }

    // Proposed endpoints stubs for future wiring
    async getStationById(stationId) {
        const response = await fetch(`${this.baseURL}/stations/${stationId}`, { headers: this.getHeaders() });
        return this.handleResponse(response);
    }

    async searchStations(params = {}) {
        const qs = new URLSearchParams(params).toString();
        const response = await fetch(`${this.baseURL}/stations/search?${qs}`, { headers: this.getHeaders() });
        return this.handleResponse(response);
    }

    async getNearbyStations(lat, lng, radiusKm = 5) {
        const response = await fetch(`${this.baseURL}/stations/nearby?lat=${lat}&lng=${lng}&radiusKm=${radiusKm}`, { headers: this.getHeaders() });
        return this.handleResponse(response);
    }

    async getMyBookings() {
        const response = await fetch(`${this.baseURL}/bookings/me`, { headers: this.getHeaders() });
        return this.handleResponse(response);
    }

    async getOwnerBookings(params = {}) {
        const qs = new URLSearchParams(params).toString();
        const response = await fetch(`${this.baseURL}/bookings/owner?${qs}`, { headers: this.getHeaders() });
        return this.handleResponse(response);
    }
}

const apiService = new ApiService();
export default apiService;
