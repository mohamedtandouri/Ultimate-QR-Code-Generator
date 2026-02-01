
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CalendarQRFormProps {
  onValueChange: (value: string) => void;
}

const CalendarQRForm: React.FC<CalendarQRFormProps> = ({ onValueChange }) => {
  const [eventData, setEventData] = useState({
    title: 'Meeting with Team',
    startDate: '2024-12-15',
    startTime: '10:00',
    endDate: '2024-12-15',
    endTime: '11:00',
    location: 'Conference Room A',
    description: 'Weekly team meeting to discuss project progress'
  });

  useEffect(() => {
    const startDateTime = `${eventData.startDate}T${eventData.startTime}:00`;
    const endDateTime = `${eventData.endDate}T${eventData.endTime}:00`;
    
    const calendarValue = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//tandouri.dev//QR Generator//EN
BEGIN:VEVENT
SUMMARY:${eventData.title}
DTSTART:${startDateTime.replace(/[-:]/g, '')}
DTEND:${endDateTime.replace(/[-:]/g, '')}
LOCATION:${eventData.location}
DESCRIPTION:${eventData.description}
END:VEVENT
END:VCALENDAR`;

    onValueChange(calendarValue);
  }, [eventData, onValueChange]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="event-title">Event Title</Label>
        <Input
          id="event-title"
          placeholder="Enter event title"
          className="mt-1"
          value={eventData.title}
          onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="start-date">Start Date</Label>
          <Input
            id="start-date"
            type="date"
            className="mt-1"
            value={eventData.startDate}
            onChange={(e) => setEventData({ ...eventData, startDate: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="start-time">Start Time</Label>
          <Input
            id="start-time"
            type="time"
            className="mt-1"
            value={eventData.startTime}
            onChange={(e) => setEventData({ ...eventData, startTime: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="end-date">End Date</Label>
          <Input
            id="end-date"
            type="date"
            className="mt-1"
            value={eventData.endDate}
            onChange={(e) => setEventData({ ...eventData, endDate: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="end-time">End Time</Label>
          <Input
            id="end-time"
            type="time"
            className="mt-1"
            value={eventData.endTime}
            onChange={(e) => setEventData({ ...eventData, endTime: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Enter event location"
          className="mt-1"
          value={eventData.location}
          onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter event description"
          className="mt-1"
          value={eventData.description}
          onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
        />
      </div>
    </div>
  );
};

export default CalendarQRForm;
