// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// class ApiService {
//     constructor() {
//         this.baseURL = API_BASE_URL;
//         this.token = localStorage.getItem('token');
//     }

//     // Helper method to get headers
//     getHeaders() {
//         const headers = {
//             'Content-Type': 'application/json',
//         };

//         if (this.token) {
//             headers['Authorization'] = `Bearer ${this.token}`;
//         }

//         return headers;
//     }

//     // Helper method to handle API responses
//     async handleResponse(response) {
//         if (!response.ok) {
//             const errorData = await response.json().catch(() => ({}));
//             throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     }

//     // Authentication APIs
//     async login(credentials) {
//         const response = await fetch(`${this.baseURL}/auth/login`, {
//             method: 'POST',
//             headers: this.getHeaders(),
//             body: JSON.stringify(credentials),
//         });

//         const data = await this.handleResponse(response);
//         if (data.token) {
//             this.token = data.token;
//             localStorage.setItem('token', data.token);
//             //for checking login response
//             localStorage.setItem('user', JSON.stringify(data.user));
//         }
//         console.log(data);
//         return data;
//     }

//     async register(userData) {
//         console.log("userdata ", userData)
//         const response = await fetch(`${this.baseURL}/auth/register`, {
//             method: 'POST',
//             headers: this.getHeaders(),
//             body: JSON.stringify(userData),
//         });
//         return this.handleResponse(response);
//     }

//     async getCurrentUser() {
//         const response = await fetch(`${this.baseURL}/auth/me`, {
//             headers: this.getHeaders(),
//         });
//         console.log(response.data);
//         return null;
//     }

//     async logout() {
//         this.token = null;
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//     }

//     // Station APIs
//     async getAllStations() {
//         const response = await fetch(`${this.baseURL}/stations`, {
//             headers: this.getHeaders(),
//         });
//         return this.handleResponse(response);
//     }



//     // async getStationsByOwner(ownerId) {
//     //     const response = await fetch(`${this.baseURL}/stations/get-station-by-owner`, {
//     //         headers: {
//     //             ...this.getHeaders(),
//     //             'X-User-Id': ownerId,
//     //         },
//     //     });
//     //     return this.handleResponse(response);
//     // }


//     async getStationsByOwner() {
//         console.log("headers" + this.getHeaders());
//         const response = await fetch(`${this.baseURL}/stations/get-station-by-owner`, {
//             headers: {
//                 ...this.getHeaders()
//             },
//         });
//         return this.handleResponse(response);
//     }

//     // async createStation(stationData, ownerId) {
//     //     const response = await fetch(`${this.baseURL}/stations`, {
//     //         method: 'POST',
//     //         headers: {
//     //             ...this.getHeaders(),
//     //             'X-User-Id': ownerId,
//     //         },
//     //         body: JSON.stringify(stationData),
//     //     });
//     //     return this.handleResponse(response);
//     // }


//     async createStation(stationData) {
//         console.log("station data ", stationData);
//         const response = await fetch(`${this.baseURL}/stations`, {
//             method: 'POST',
//             headers: {
//                 ...this.getHeaders(),
//             },
//             body: JSON.stringify(stationData),
//         });
//         return this.handleResponse(response);
//     }



//     async updateStation(stationId, stationData, ownerId) {
//         const response = await fetch(`${this.baseURL}/stations/${stationId}`, {
//             method: 'PUT',
//             headers: {
//                 ...this.getHeaders(),
//                 'X-User-Id': ownerId,
//             },
//             body: JSON.stringify(stationData),
//         });
//         return this.handleResponse(response);
//     }

//     async deleteStation(stationId, ownerId) {
//         const response = await fetch(`${this.baseURL}/stations/${stationId}`, {
//             method: 'DELETE',
//             headers: {
//                 ...this.getHeaders(),
//                 'X-User-Id': ownerId,
//             },
//         });
//         return this.handleResponse(response);
//     }

//     async getUnapprovedStations() {
//         const response = await fetch(`${this.baseURL}/stations/unapproved`, {
//             headers: this.getHeaders(),
//         });
//         return this.handleResponse(response);
//     }

//     async approveStation(approvalData, adminId) {
//         const response = await fetch(`${this.baseURL}/admin/stations/process-approval`, {
//             method: 'POST',
//             headers: {
//                 ...this.getHeaders(),
//                 'X-User-Id': adminId,
//             },
//             body: JSON.stringify(approvalData),
//         });
//         return this.handleResponse(response);
//     }

//     // User Management APIs
//     async getAllUsers() {
//         const response = await fetch(`${this.baseURL}/admin/users`, {
//             headers: this.getHeaders(),
//         });
//         return this.handleResponse(response);
//     }

//     async getUserById(userId) {
//         const response = await fetch(`${this.baseURL}/auth/get-by-id/${userId}`, {
//             headers: this.getHeaders(),
//         });
//         return this.handleResponse(response);
//     }

//     async updateUser(userData, userId) {
//         const response = await fetch(`${this.baseURL}/auth/edit-user`, {
//             method: 'PUT',
//             headers: {
//                 ...this.getHeaders(),
//                 'X-User-Id': userId,
//             },
//             body: JSON.stringify(userData),
//         });
//         return this.handleResponse(response);
//     }

//     // Admin APIs
//     async getAuditLogs() {
//         const response = await fetch(`${this.baseURL}/admin/audit-logs`, {
//             headers: this.getHeaders(),
//         });
//         return this.handleResponse(response);
//     }

//     // Booking APIs (to be implemented when booking service is added)
//     async getBookings() {
//         // Placeholder for booking service integration
//         return [];
//     }

//     async createBooking(/* bookingData */) {
//         // Placeholder for booking service integration
//         return {};
//     }

//     async updateBooking(/* bookingId, bookingData */) {
//         // Placeholder for booking service integration
//         return {};
//     }

//     async deleteBooking(/* bookingId */) {
//         // Placeholder for booking service integration
//         return {};
//     }

//     // Proposed endpoints stubs for future wiring
//     async getStationById(stationId) {
//         const response = await fetch(`${this.baseURL}/stations/${stationId}`, { headers: this.getHeaders() });
//         return this.handleResponse(response);
//     }

//     async searchStations(params = {}) {
//         const qs = new URLSearchParams(params).toString();
//         const response = await fetch(`${this.baseURL}/stations/search?${qs}`, { headers: this.getHeaders() });
//         return this.handleResponse(response);
//     }

//     async getNearbyStations(lat, lng, radiusKm = 5) {
//         const response = await fetch(`${this.baseURL}/stations/nearby?lat=${lat}&lng=${lng}&radiusKm=${radiusKm}`, { headers: this.getHeaders() });
//         return this.handleResponse(response);
//     }

//     async getMyBookings() {
//         const response = await fetch(`${this.baseURL}/bookings/me`, { headers: this.getHeaders() });
//         return this.handleResponse(response);
//     }

//     async getOwnerBookings(params = {}) {
//         const qs = new URLSearchParams(params).toString();
//         const response = await fetch(`${this.baseURL}/bookings/owner?${qs}`, { headers: this.getHeaders() });
//         return this.handleResponse(response);
//     }


//     async createPort(stationId, portData) {
//         console.log("port data api call", portData)
//         const response = await fetch(`${this.baseURL}/stations/${stationId}/ports`, {
//             method: 'POST',
//             headers: {
//                 ...this.getHeaders(),
//             },
//             body: JSON.stringify(portData),
//         });
//         return this.handleResponse(response);
//     }

// }

// const apiService = new ApiService();
// export default apiService;


import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

/**
 * A service class to handle all API communications using axios.
 * It uses axios interceptors to manage request headers and response handling globally.
 */
class ApiService {
    constructor() {
        // Create an axios instance with a predefined base URL.
        this.api = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Use a request interceptor to dynamically add the Authorization header to every request.
        this.api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Use a response interceptor to handle successful responses and errors globally.
        this.api.interceptors.response.use(
            (response) => response.data, // On success, return the response data directly.
            (error) => {
                // On error, extract a clear message and reject the promise.
                const errorMessage = error.response?.data?.message || error.message || `HTTP error! status: ${error.response?.status}`;
                return Promise.reject(new Error(errorMessage));
            }
        );
    }

    // --- Authentication APIs ---

    async login(credentials) {
        const data = await this.api.post('/auth/login', credentials);
        if (data.token) {
            localStorage.setItem('token', data.token);
            if (data.user) {
                localStorage.setItem('user', JSON.stringify(data.user));
            }
        }
        console.log("Login successful:", data);
        return data;
    }

    async register(userData) {
        console.log("Registering user:", userData);
        return this.api.post('/auth/register', userData);
    }

    async getCurrentUser() {
        return this.api.get('/auth/me');
    }


    async changePassword(passwordData) {
        console.log("Changing password:", passwordData);
        return this.api.put('/auth/change-password', passwordData);
    }


    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log("User logged out.");
    }

    // --- Station APIs ---

    async getAllStations() {
        return this.api.get('/stations');
    }

    async getStationsByOwner() {
        return this.api.get('/stations/get-station-by-owner');
    }

    async createStation(stationData) {
        console.log("Creating station:", stationData);
        return this.api.post('/stations', stationData);
    }

    async updateStation(stationId, stationData) {
        return this.api.put(`/stations/${stationId}`, stationData);
    }

    async deleteStation(stationId) {
        return this.api.delete(`/stations/${stationId}`);
    }

    async createPort(stationId, portData) {
        console.log("Creating port for station:", stationId, portData);
        return this.api.post(`/stations/${stationId}/ports`, portData);
    }

    async getUnapprovedStations() {
        return this.api.get('/stations/unapproved');
    }

    // --- Admin APIs ---

    async approveStation(approvalData) {
        return this.api.post('/admin/stations/process-approval', approvalData);
    }

    async getAllUsers() {
        return this.api.get('/admin/users');
    }

    async getAuditLogs() {
        return this.api.get('/admin/audit-logs');
    }

    // --- User Management APIs ---

    async getUserById(userId) {
        return this.api.get(`/auth/get-by-id/${userId}`);
    }

    async updateUser(userData, userId) {
        return this.api.put('/auth/edit-user', userData, {
            headers: { 'X-User-Id': userId },
        });
    }

    // --- Search/Booking APIs ---

    async getStationById(stationId) {
        return this.api.get(`/stations/${stationId}`);
    }

    async searchStations(params = {}) {
        return this.api.get('/stations/search', { params });
    }

    async getNearbyStations(lat, lng, radiusKm = 5) {
        return this.api.get('/stations/nearby', { params: { lat, lng, radiusKm } });
    }

    // --- Booking APIs (Placeholders) ---


    async getBookingsByStationId(id) {
        return this.api.get(`/bookings/station/${id}`);
    }

    async getMyBookings() {
        console.warn("getMyBookings API is not implemented.");
        return Promise.resolve([]);
    }

    async getOwnerBookings(params = {}) {
        console.warn("getOwnerBookings API is not implemented.");
        return Promise.resolve([]);
    }
}

// Export a singleton instance of the service
const apiService = new ApiService();
export default apiService;