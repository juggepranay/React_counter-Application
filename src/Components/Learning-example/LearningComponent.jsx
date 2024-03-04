import SecondComponent from './SecondComponent';
import FirstComponent from './FirstComponent';
import ThirdComponent from './ThirdComponent';
import {FivthComponent} from './FirstComponent';
import JsxBasics from './JsxBasics'


export default function Learning() {
    return (
      <div className="LearningComponent">
        My Application
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FivthComponent></FivthComponent>
        <JsxBasics></JsxBasics>
      </div>
    );
  }