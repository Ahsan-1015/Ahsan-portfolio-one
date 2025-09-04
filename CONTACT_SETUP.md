# Contact Form Setup Guide

## 🚀 Quick Setup

To customize your contact form, simply update the `src/config/contact.js` file with your information:

### 1. Update Contact Information

```javascript
export const contactConfig = {
  email: "your-email@example.com", // Your actual email
  phone: "+1 (555) 123-4567", // Your actual phone
  location: "Your City, Country", // Your actual location

  // Update social media links
  social: {
    linkedin: "https://linkedin.com/in/your-actual-profile",
    github: "https://github.com/your-actual-username",
    twitter: "https://twitter.com/your-actual-username",
  },

  // Calendar and Scheduling - Update these with your actual booking links
  scheduling: {
    calendly: "https://calendly.com/yourusername/portfolio-consultation", // Your Calendly link
    googleCalendar:
      "https://calendar.google.com/calendar/embed?src=your-email%40gmail.com", // Your Google Calendar
    zoomMeeting: "https://zoom.us/j/your-meeting-id", // Your Zoom meeting link
  },

  // Business Hours and Availability
  availability: {
    timezone: "Your Timezone", // e.g., "EST", "PST", "BST"
    businessHours: "Mon-Fri: 9:00 AM - 6:00 PM", // Your business hours
    responseTime: "Within 24 hours", // Your response time commitment
  },
};
```

### 2. How It Works

- **Form Fields**: Name, Email, Phone, Service Selection, Message
- **Email Submission**: Uses `mailto:` protocol to open user's default email client
- **Service Dropdown**: Pre-configured with common development services
- **Responsive Design**: Works perfectly on all devices
- **Cosmic Theme**: Matches your portfolio's dark/space aesthetic

### 3. Features

✅ **Required Fields**: Name, Email, Message  
✅ **Optional Fields**: Phone, Service Selection  
✅ **Service Categories**: Web Dev, Mobile, UI/UX, Full Stack, etc.  
✅ **Form Validation**: Client-side validation with visual feedback  
✅ **Success/Error States**: Clear feedback for users  
✅ **Social Links**: LinkedIn, GitHub, Twitter integration  
✅ **Responsive Layout**: Mobile-first design  
✅ **Smart Scheduling**: Multiple scheduling options with modal selection  
✅ **Calendar Integration**: Google Calendar, Calendly, and Zoom support  
✅ **Availability Display**: Business hours, timezone, and response time

### 4. Customization Options

- **Services**: Edit the `services` array in `Contact.jsx` to add/remove service options
- **Styling**: Modify Tailwind classes to match your preferred color scheme
- **Fields**: Add/remove form fields as needed
- **Validation**: Customize validation rules and error messages

### 5. Email Integration

The form currently uses the `mailto:` protocol which:

- Opens the user's default email client
- Pre-fills subject and body with form data
- Works without backend setup
- Perfect for portfolio websites

For production use, consider integrating with:

- EmailJS
- Formspree
- Netlify Forms
- Custom backend API

### 6. Scheduling & Calendar Features

#### **Schedule a Call Button:**

- **Email Request**: Opens email client with pre-filled scheduling request
- **Calendly Booking**: Direct link to your Calendly booking page
- **Zoom Meeting**: Direct link to Zoom meeting room
- **Smart Modal**: User-friendly selection interface

#### **View Calendar Button:**

- **Google Calendar**: View your public calendar
- **Calendly**: Direct booking through Calendly
- **Email Request**: Request calendar availability via email
- **Multiple Options**: Users can choose their preferred method

#### **Availability Display:**

- **Business Hours**: Shows your working schedule
- **Timezone**: Displays your local timezone
- **Response Time**: Sets expectations for communication

### 7. File Structure

```
src/
├── pages/
│   └── Contact.jsx          # Main contact component
├── config/
│   └── contact.js           # Contact configuration
└── router/
    └── router.jsx           # Contact route (/contact)
```

### 8. Available Routes

- **Home**: `/` - Overview with contact section
- **Contact**: `/contact` - Full contact page
- **Projects**: `/projects` - All projects
- **Repositories**: `/Repositories` - GitHub repos

---

## 🎯 **Ready to Use!**

Your contact form is now fully functional and integrated into your portfolio. Users can:

1. **Fill out the form** with their project details
2. **Select services** from the dropdown menu
3. **Submit the form** to open their email client
4. **Navigate easily** between different sections

**Note**: Update the configuration file with your real information before deploying!

---

## 🔧 **Troubleshooting**

### Form not submitting?

- Check browser console for errors
- Ensure all required fields are filled
- Verify email format is correct

### Email client not opening?

- Some browsers may block mailto links
- Check browser settings for external protocol handling
- Consider using EmailJS for better compatibility

### Styling issues?

- Verify Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Ensure responsive breakpoints are correct
