import PropTypes from 'prop-types';
import {
  _Checklist,
  _CreatePartTemplate,
  _Form,
} from './createPart.styles';

function CreatePart({ checklist, form }) {
  return (
    <_CreatePartTemplate>
      <_Checklist>{checklist}</_Checklist>
      <_Form>{form}</_Form>
    </_CreatePartTemplate>
  );
}

CreatePart.propTypes = {
  /**
   * Node/Component for summary of requirements
   */
  checklist: PropTypes.node.isRequired,
  /**
   * Node/Component for create part/assembly form
   */
  form: PropTypes.node.isRequired,
};

export default CreatePart;
