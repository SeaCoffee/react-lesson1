import {SimpsonsFamily} from "./components/SimpsonsFamily/SimpsonsFamily";
import {RickMorty} from "./components/RickMorty/RickMorty";

const App = () => {
  return (
      <div>
          <SimpsonsFamily name={'Homer'} info ={'info HS'} img={'https://static.wikia.nocookie.net/simpsons/images/8/8d/Swimsuit_Homer.png'}/>
          <SimpsonsFamily name={'Marge'} info={'info MS'} img={'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Marge_Simpson.png/217px-Marge_Simpson.png'}/>
          <SimpsonsFamily name={'Bart'} info={'info BS'} img={'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png'}/>
          <SimpsonsFamily name={'Lisa'} info={'info LS'} img={'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png'}/>

          <RickMorty/>

      </div>
  );
};

export {App};
