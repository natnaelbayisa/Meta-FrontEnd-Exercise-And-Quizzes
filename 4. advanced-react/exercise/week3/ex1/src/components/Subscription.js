export default Subsription = (WrappedComponent, selectData) => {
  return (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        selectData(newData);
      };
      DataSource.addListner(handleChange);

      return () => {
        DataSource.removeListner(handleChange);
      };
    }, []);
    return <WrappedComponent data={data} {...props} />;
  };
};
