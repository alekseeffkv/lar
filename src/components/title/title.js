import './title.scss';

const Title = ({ lang }) => {
  return (
    <h1 className="title">
      Learn {lang} using any YouTube video <br />
      <span className="title__free">for free!</span>
    </h1>
  );
};

export default Title;
