import axios, { type AxiosInstance } from 'axios'
import type { AxiosResponse } from 'axios'
import type { Event } from '@/models/models'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(): Promise<AxiosResponse<Event[]>> {
    return apiClient.get<Event[]>('/events')
  },
  getEvent(id: string): Promise<AxiosResponse<Event>> {
    return apiClient.get<Event>(`/events/${id}`)
  }
}
