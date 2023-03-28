
import './App.css';
import React, { useState, lazy, Suspense } from 'react';
import { Weather, SearchBox, NotFound } from './components';
import { ErrorBoundary } from './Error';


function App() {
  const [height, setHeight] = useState(60);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [searchWeatherData, setSearchWeatherData] = useState(null);
  const [searchError, setSearchError] = useState(false);

  // const Weather = lazy(() => import('./components'));
  const handleSearchSuccess = () => {
    setSearchSuccess(true);
    setSearchError(false);
  }
  const handleSearchErr = () => {
    setSearchSuccess(false);
    setSearchError(true);
  }
  console.log(searchWeatherData);
  return (
    <div className="App">
      <div className="container" style={{ height: `${height}px`, transition: 'height 0.6s ease-out' }}>
        <ErrorBoundary>
          <SearchBox
            setHeight={setHeight}
            onSearchSuccess={handleSearchSuccess}
            onSearchError={handleSearchErr}
            setSearchWeatherData={setSearchWeatherData}
          />
        </ErrorBoundary>
        {searchSuccess ? (
          searchWeatherData ? (

            <Weather searchWeatherData={searchWeatherData} />

          ) : (
            searchError ? (
              <NotFound />
            ) : null
          )
        ) : (
          <ErrorBoundary>

            <Weather searchWeatherData={searchWeatherData} />

          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}

export default App;
