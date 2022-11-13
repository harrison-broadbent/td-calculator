// Container
// generic container to hold the page contents
// Responsive, reflows onto different breakpoints

export default function Container(props) {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">{props.children}</div>
    </div>
  );
}
