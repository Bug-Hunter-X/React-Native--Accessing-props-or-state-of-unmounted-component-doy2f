import React, { useEffect, useState } from 'react';

const MyComponent = ({ someProp }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    // Perform async operation
    const fetchData = async () => {
      try {
        const response = await someAsyncOperation();
        if (mounted) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      mounted = false; // Cleanup function
    };
  }, [someProp]);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
export default MyComponent;