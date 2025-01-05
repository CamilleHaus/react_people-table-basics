import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

export interface Person {
  name: string;
  sex: string;
  born: number;
  died: number;
  fatherName: string | null;
  motherName: string | null;
}

const PersonLink: React.FC<{
  name: string;
  person?: Person;
  setSelectedPerson: Dispatch<SetStateAction<string>>;
}> = ({ name, person, setSelectedPerson }) => {
  const navigate = useNavigate();

  if (!person) {
    return <span>{name}</span>;
  }


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedPerson(name);
    navigate(
      `/people/${name.replaceAll(' ', '-').toLowerCase()}-${person.born}`,
    );
  };

  return (
    <a
      href={`#/people/${name.replaceAll(' ', '-').toLowerCase()}-${person.born}`}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
      onClick={e => handleClick(e)}
    >
      {name}
    </a>
  );
};

export default PersonLink;
