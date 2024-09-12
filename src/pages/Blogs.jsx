import React, { useEffect, useState } from 'react';

const SelfHelpResources = () => {
  const [resources, setResources] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchResources();
    fetchQuotes();
  }, []);

  const fetchResources = async () => {
    const response = await fetch('https://www.reddit.com/r/mentalhealth/.rss');
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'application/xml');
    const items = xml.querySelectorAll('entry');
    const resources = Array.from(items).map(item => ({
      title: item.querySelector('title').textContent,
      url: item.querySelector('link').getAttribute('href'),
      description: item.querySelector('summary').textContent,
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image since RSS feeds don’t usually have images
    }));
    setResources(resources);
  };

  const fetchQuotes = async () => {
    const response = await fetch('https://zenquotes.io/api/quotes');
    const data = await response.json();
    setQuotes(data.slice(0, 5)); // Get the first 5 quotes
  };

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="self-help-resources">
      <h2>Self-Help Resources</h2>
      <input
        type="text"
        placeholder="Search Resources..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="quotes-section">
        <h3>Inspirational Quotes</h3>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>"{quote.q}" - <strong>{quote.a}</strong></li>
          ))}
        </ul>
      </div>
      <div className="resource-grid">
        {filteredResources.map((resource, index) => (
          <div key={index} className="resource-card">
            <img src={resource.imageUrl} alt={resource.title} className="resource-image" />
            <h3 className="resource-title">{resource.title}</h3>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfHelpResources;
