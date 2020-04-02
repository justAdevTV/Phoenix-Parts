import Button from '@material-ui/core/Button';
import { Modal } from '../components/organisms';

function Home() {
  return (
    <div>
      This is the start of something great :)
      <Modal
        modalTrigger={
          <Button variant="contained" color="primary">
            Modal Trigger
          </Button>
        }
      >
        Hello
      </Modal>
    </div>
  );
}

export default Home;
