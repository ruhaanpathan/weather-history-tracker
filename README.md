# weather-history-tracker
Fetch hourly temperature history for your location using Geolocation API and Open-Meteo

A simple browser-based weather history viewer that fetches real historical temperature data based on your current location and a custom date range.

## Features

- Auto-detects your location using the browser's Geolocation API
- Lets you pick a custom start and end date
- Fetches hourly temperature data (2m above ground) for the selected period
- Displays results as a clean list of timestamps and temperatures

## How It Works

1. Click the **Fetch** button
2. Allow location access when prompted
3. Select your desired date range
4. Hourly temperature data for your location is fetched from the [Open-Meteo Archive API](https://open-meteo.com/) and displayed on the page

## Tech Stack

- Plain HTML, CSS, JavaScript (no frameworks)
- [Open-Meteo Historical Weather API](https://archive-api.open-meteo.com/) — free and open source
- Browser Geolocation API

## Getting Started

Just open `index.html` in your browser — no installation or API key required.

```bash
git clone https://github.com/your-username/weather-history-tracker.git
cd weather-history-tracker
open index.html
```

## API Reference

Data is fetched from:
```
https://archive-api.open-meteo.com/v1/archive
  ?latitude={lat}
  &longitude={lon}
  &start_date={YYYY-MM-DD}
  &end_date={YYYY-MM-DD}
  &hourly=temperature_2m
```

## Limitations

- Requires browser location permission
- Historical data only (not real-time forecast)
- Large date ranges return a lot of data — keep ranges reasonable

## License

MIT
