
interface RoboImageProps {
  data: {
    id: number;
    name: string;
    imageUrl: string;
    timestamp: string;
    size: string;
  };
}

function RoboImage({ data }: RoboImageProps) {
  return (
    <div>
      <h3>Here is your Robo Image:</h3>
      <img
        src={data.imageUrl}
        alt={`Generated Robo Image: ${data.name}`}
        width={data.size.split('x')[0]}
        height={data.size.split('x')[1]}
      />
      <div>
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Generated At:</strong> {data.timestamp}</p>
        <p><strong>Image Size:</strong> {data.size}</p>
      </div>
    </div>
  );
}

export default RoboImage;
