import React, { useState } from 'react';
import { Button } from '../src';

const Example: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>React Package Example</h1>

            <div style={{ marginBottom: '20px' }}>
                <h2>Button Variants</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button
                        label="Primary Button"
                        variant="primary"
                        onClick={handleClick}
                    />
                    <Button
                        label="Secondary Button"
                        variant="secondary"
                        onClick={handleClick}
                    />
                    <Button
                        label="Danger Button"
                        variant="danger"
                        onClick={handleClick}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Disabled Button</h2>
                <Button
                    label="Disabled Button"
                    disabled
                    onClick={handleClick}
                />
            </div>

            <div>
                <h2>Click Counter: {count}</h2>
                <p>Click any of the buttons above to increment the counter.</p>
            </div>
        </div>
    );
};

export default Example; 