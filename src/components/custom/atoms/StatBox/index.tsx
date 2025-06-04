interface StatBoxProps {
  number: string;
  label: string;
}

const StatBox = (props: StatBoxProps) => {
  const { number, label } = props;
  return (
    <div>
      <h4 className="text-2xl font-semibold">{number}</h4>
      <p className="text-sm text-[#A0A3BD]">{label}</p>
    </div>
  );
};

export default StatBox;
