import paintings from './paintings.json';
import PaintingList from './components/Painting/PaintingList';
import Section from './components/Section';
import ColorPicker from 'components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Container from 'components/Container/Container';
import Box from './components/Box/Box';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
export default function App() {
  return (
    <Container>
      <Section title="топ продаж">
        <PaintingList items={paintings} />
      </Section>
      <Alert text="Шеф все пропало!" type="success" />
      <Alert text="Шеф все пропало!" type="warning" />
      <Alert text="Шеф все пропало!" type="error" />
      <ColorPicker options={colorPickerOptions} />
      <ColorPicker options={colorPickerOptions} />
      <Section title="Hi man" />
      <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
      <Box type="medium" />
      <Box type="large" />
    </Container>
  );
}
