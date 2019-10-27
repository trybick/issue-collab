import React from 'react';
import Labels from './Labels';
import Languages from './Languages';
import './TogglesContainer.scss';

const TogglesContainer = ({ labels, languages, onToggleChange }) => (
  <div className="toggles-container">
    <Labels labels={labels} onToggleChange={onToggleChange} />
    <Languages languages={languages} onToggleChange={onToggleChange} />
  </div>
);

export default TogglesContainer;
