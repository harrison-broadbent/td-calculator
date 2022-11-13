// Card
// background card for calculator form

export default function Card(props) {
  return (
    <div className="bg-gray-200 w-max h-max m-8 p-6 mx-auto rounded-md shadow-lg">
      {props.children}
    </div>
  );
}
