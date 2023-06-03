# roadmap-component

A reusable roadmap component for displaying a product roadmap on your website

## Installation

You can install the package using npm:

```bash
npm install roadmap-component
```

## Usage

To use the roadmap component, import it into your project:

```
import RoadmapComponent from 'roadmap-component';

const roadmapData = [
{ title: 'Q1 2023', description: 'Launch MVP' },
{ title: 'Q2 2023', description: 'Introduce premium features' },
// Add more roadmap items...
];

function App() {
return (
<div>
<h1>My Product Roadmap</h1>
<RoadmapComponent data={roadmapData} />
</div>
);
}

export default App;
```

The data prop expects an array of objects, where each object represents a roadmap item with a title and description.

## Customization

You can customize the appearance of the roadmap component by passing CSS styles as props. Here's an example:

```
const roadmapStyle = {
backgroundColor: 'lightgray',
padding: '1rem',
borderRadius: '4px',
};

```

<RoadmapComponent data={roadmapData} style={roadmapStyle} />

Feel free to modify the CSS properties to match your design requirements.

## Examples

```
createRoadmap('roadmapContainer', [
  {
    title: 'Q1 2023',
    description: 'Launch MVP',
    status: 'In progress',
    startDate: '2023-01-01',
    endDate: '2023-03-31',
  },
  {
    title: 'Q2 2023',
    description: 'Introduce premium features',
    status: 'Planned',
    startDate: '2023-04-01',
    endDate: '2023-06-30',
  },
  // Add more roadmap items with custom fields...
]);
```

## License

This project is licensed under the MIT License.
