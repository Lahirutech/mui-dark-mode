import Container from '@mui/material/Container';
import LeftBar from '../src/components/LeftBar';

export default function Home(props: { toggleTheme: () => void }) {
  return (
    <Container maxWidth='lg'>
      <LeftBar toggleTheme={props.toggleTheme} />
    </Container>
  );
}
