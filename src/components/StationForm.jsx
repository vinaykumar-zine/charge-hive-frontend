import React, { useState, useEffect } from 'react';
import { FaSpinner, FaTimes } from 'react-icons/fa';

function StationForm({ station = null, onSubmit, onCancel, isLoading = false }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        latitude: '',
        longitude: '',
        description: '',
        numberOfPorts: 1,
        chargingRate: '',
        pricePerHour: '',
        isAvailable: true,
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (station) {
            setFormData({
                name: station.name || '',
                location: station.location || '',
                latitude: station.latitude || '',
                longitude: station.longitude || '',
                description: station.description || '',
                numberOfPorts: station.numberOfPorts || 1,
                chargingRate: station.chargingRate || '',
                pricePerHour: station.pricePerHour || '',
                isAvailable: station.isAvailable !== undefined ? station.isAvailable : true,
            });
        }
    }, [station]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Station name is required';
        }

        if (!formData.location.trim()) {
            newErrors.location = 'Location is required';
        }

        if (!formData.latitude || isNaN(formData.latitude)) {
            newErrors.latitude = 'Valid latitude is required';
        }

        if (!formData.longitude || isNaN(formData.longitude)) {
            newErrors.longitude = 'Valid longitude is required';
        }

        if (!formData.chargingRate || isNaN(formData.chargingRate)) {
            newErrors.chargingRate = 'Valid charging rate is required';
        }

        if (!formData.pricePerHour || isNaN(formData.pricePerHour)) {
            newErrors.pricePerHour = 'Valid price per hour is required';
        }

        if (formData.numberOfPorts < 1) {
            newErrors.numberOfPorts = 'Number of ports must be at least 1';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const submitData = {
            ...formData,
            latitude: parseFloat(formData.latitude),
            longitude: parseFloat(formData.longitude),
            numberOfPorts: parseInt(formData.numberOfPorts),
            chargingRate: parseFloat(formData.chargingRate),
            pricePerHour: parseFloat(formData.pricePerHour),
        };

        onSubmit(submitData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {station ? 'Edit Station' : 'Add New Station'}
                    </h2>
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        <FaTimes className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Station Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Station Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.name ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter station name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                            )}
                        </div>

                        {/* Location */}
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                Location *
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.location ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter location address"
                            />
                            {errors.location && (
                                <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                            )}
                        </div>

                        {/* Latitude */}
                        <div>
                            <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-2">
                                Latitude *
                            </label>
                            <input
                                type="number"
                                step="any"
                                id="latitude"
                                name="latitude"
                                value={formData.latitude}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.latitude ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="e.g., 28.6139"
                            />
                            {errors.latitude && (
                                <p className="mt-1 text-sm text-red-600">{errors.latitude}</p>
                            )}
                        </div>

                        {/* Longitude */}
                        <div>
                            <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-2">
                                Longitude *
                            </label>
                            <input
                                type="number"
                                step="any"
                                id="longitude"
                                name="longitude"
                                value={formData.longitude}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.longitude ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="e.g., 77.2090"
                            />
                            {errors.longitude && (
                                <p className="mt-1 text-sm text-red-600">{errors.longitude}</p>
                            )}
                        </div>

                        {/* Number of Ports */}
                        <div>
                            <label htmlFor="numberOfPorts" className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Ports *
                            </label>
                            <input
                                type="number"
                                min="1"
                                id="numberOfPorts"
                                name="numberOfPorts"
                                value={formData.numberOfPorts}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.numberOfPorts ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.numberOfPorts && (
                                <p className="mt-1 text-sm text-red-600">{errors.numberOfPorts}</p>
                            )}
                        </div>

                        {/* Charging Rate */}
                        <div>
                            <label htmlFor="chargingRate" className="block text-sm font-medium text-gray-700 mb-2">
                                Charging Rate (kW) *
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                id="chargingRate"
                                name="chargingRate"
                                value={formData.chargingRate}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.chargingRate ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="e.g., 50.0"
                            />
                            {errors.chargingRate && (
                                <p className="mt-1 text-sm text-red-600">{errors.chargingRate}</p>
                            )}
                        </div>

                        {/* Price Per Hour */}
                        <div>
                            <label htmlFor="pricePerHour" className="block text-sm font-medium text-gray-700 mb-2">
                                Price Per Hour (₹) *
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                id="pricePerHour"
                                name="pricePerHour"
                                value={formData.pricePerHour}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.pricePerHour ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="e.g., 25.00"
                            />
                            {errors.pricePerHour && (
                                <p className="mt-1 text-sm text-red-600">{errors.pricePerHour}</p>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="3"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter station description"
                        />
                    </div>

                    {/* Availability */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="isAvailable"
                            name="isAvailable"
                            checked={formData.isAvailable}
                            onChange={handleChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="isAvailable" className="ml-2 block text-sm text-gray-900">
                            Station is available for bookings
                        </label>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end space-x-3 pt-6 border-t">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <FaSpinner className="animate-spin h-4 w-4" />
                            ) : (
                                station ? 'Update Station' : 'Create Station'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StationForm;
