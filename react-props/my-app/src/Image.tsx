import './Image.css';
type Props = { text: string };

export function Image({ text }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={text} alt="space-image" />
      </div>
    </div>
  );
}
