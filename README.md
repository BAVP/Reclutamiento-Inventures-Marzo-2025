# URL Shortener Service

A simple URL shortening service with expiration, click tracking, and optional custom suffixes. 

## IMPORTANT
- In order to get more information, this app use "http://ip-api.com".
- This data will be stored for about a week before delete.
- I can deactivate this if you write me to: bruno.vega.pizarro@gmail.com
- I DID USE IA in order to improve some CSS tweaks, build part of this documentation and debug some errors.
- I DID NOT USE IA as a "Do everything for me"

## Features
- Shorten long URLs into unique, short URLs.
- Track the number of clicks per shortened URL.
- Extra information for every click.
- URLs expire automatically after 3 days.
- Simple web interface for URL submission and information retrieval.
- REST API for programmatic interaction.
- Deployed in the cloud for live testing.

## Live Demo
https://capable-dieffenbachia-eb06e3.netlify.app/

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Backend Setup
```sh
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

It is also needed to replace a line in /frontend/src/api/urls.ts in order to develop:
Where:
```sh
export const BASE_URL = window.location.origin + "/api/urls/";
```

Should be:
```sh
export const BASE_URL = "http://localhost:3000/api/urls/";
```
Note that it may be needed to update the port.

## Tech Stack - MERN
- MongoDB: Already have a cloud storage.
- Express: Easy and fast to setup.
- React + TS: Fast to develop little and medium applications.
- Node + TS: Fast to develop and keep using TS.

### 🚀 Full JavaScript Stack.
### ⚡ Fast Development & High Productivity.
### 🌍 Great for Scalable and Real-Time Applications.
### 📦 Cloud-Friendly & Cross-Platform.

## Database and models
The model contains the needed info to cut urls, and also stores information of every click using the api "http://ip-api.com". 
```sh
export const InternetInfoSchema = new mongoose.Schema({
  isp: { type: String },
  ip: { type: String },
  country: { type: String },
  region: { type: String },
  city: { type: String },
  lat: { type: String },
  lon: { type: String },
  timestamp: { type: Date, default: Date.now() },
});

export const UrlSchema = new mongoose.Schema({
  url: { type: String, required: "Url must be provided" },
  sufix: { type: String, required: "Sufix must be provided" },
  clicks: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  clicksInformation: { type: [InternetInfoSchema], default: [] },
});
```

## Frontend Endpoints
### "https://capable-dieffenbachia-eb06e3.netlify.app/" => Homepage, useful to cut links

### "https://capable-dieffenbachia-eb06e3.netlify.app/info" => A search bar to find information about sufix in urls

### "https://capable-dieffenbachia-eb06e3.netlify.app/:HbpWr1WE" => Any other route will redirect, or show a error message.

## API Endpoints

### Create a Short URL
**POST** `https://capable-dieffenbachia-eb06e3.netlify.app/api/urls/`
- **Request Body:**
  ```json
  {
    "url": "https://youtube.com",
    "sufix": "customAlias"  // (Optional)
  }
  ```
- **Response:**
  ```json
  {
  "url": "https://youtube.com",
  "sufix": "HbpWr1WE",
  "clicks": 0,
  "isActive": true,
  "createdAt": "2025-03-31T01:10:21.584Z",
  "_id": "67e9ebe42120e2d2d4dfc6a7",
  "clicksInformation": []
  }
  ```

### Retrieve a URL
**GET** `https://capable-dieffenbachia-eb06e3.netlify.app/api/urls/:sufix`

- **Response:**
  ```json
  {
  "_id": "67e9ebe42120e2d2d4dfc6a7",
  "url": "https://youtube.com",
  "sufix": "HbpWr1WE",
  "clicks": 0,
  "isActive": true,
  "createdAt": "2025-03-31T01:10:21.584Z",
  "clicksInformation": [],
  "__v": 0
  }
  ```

### Check if a Suffix Exists
**GET** `https://capable-dieffenbachia-eb06e3.netlify.app/:sufix/exist`
- **Response:**
  If exist, returns code 302: Found, else, 404: Not found

### Track Clicks
**PATCH** `https://capable-dieffenbachia-eb06e3.netlify.app/:sufix/clicks`
- Updates click count.
- **Request:**
- ```json
  {
  "isp": "ISP Example",
  "ip": "192.168.1.1",
  "country": "United States",
  "region": "California",
  "city": "Los Angeles",
  "lat": 34.0522,
  "lon": -118.2437,
  "timestamp": 1711824000000
  }
  ```
  **Response:**
- "https://youtube.com"

### Delete a URL
**DELETE** `https://capable-dieffenbachia-eb06e3.netlify.app/:id`
- Deletes a shortened URL, returns status code 204.

## Challenges
- Deploy: I usually develop, but rarely i had to deploy. Its exciting, but hard to do in a right way
- Frontend: I lack of visual creativiy. I can solve problems from scratch, but my creativity stills lacking the visual imaginative component. But i can improve it.
- 
## License
MIT

---

For questions or improvements, feel free to open an issue or contribute!

