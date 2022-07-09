interface ContainerProps {
  name: string;
}

const Wrapper: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>Bunch</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default Wrapper;
