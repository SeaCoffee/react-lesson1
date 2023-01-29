import {SimpsonsFamily} from "../SimpsonsFamily/SimpsonsFamily";


const Simpson = (props) => {
    const {key, surname, name, img} = props

  return (
      <div>
              <div>Surname: {Simpson.surname}</div>
              <div>Name: {Simpson.name}</div>
              <img src={Simpson.img} alt='name'/>
      </div>
  );
};

export {Simpson};