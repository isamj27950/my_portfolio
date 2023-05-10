import React from 'react'

export default function CardsResumeSkill() {
    return (
      <div>
        <div>
          <h4>Features</h4>
          <h3>Design Skill</h3>
          <div>
            <p>Photoshot</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p>Canva</p>
            <input
              type="range"
              min="0"
              max="100"
              value="80"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p>Adobe illustrator</p>
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p>Adobe xd</p>
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              className="range range-secondary range-xs mx-2"
            />
          </div>
        </div>
        <div>
          <h4>Features</h4>
          <h3>Development Skill</h3>
          <div>
            <p>HTML</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p>CSS</p>
            <input
              type="range"
              min="0"
              max="100"
              value="80"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p>PHP</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs mx-2"
            />
          </div>
          <div>
            <p>JAVASCRIPT</p>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="range range-secondary range-xs mx-2"
            />
          </div>
        </div>
      </div>
    );
}
