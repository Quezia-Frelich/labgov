import Text_body from "../text/text-body";
import Text_head_1 from "../text/text-head-1";

export default function Card_benefit({ icon, title, subtitle, description }) {
  return (
    <div className={`bg-white/20 border-2 border-white flex flex-row lg:flex-col items-center py-8 px-3 gap-3 rounded-lg hover:scale-105 transition-all`}>
      <div className="text-start lg:text-center">
        <Text_head_1 className={'font-bold mb-3'}>{title}</Text_head_1>
        {subtitle && <Text_body className="font-bold mb-2">{subtitle}</Text_body>}
        <Text_body>{description}</Text_body>
      </div>
    </div>
  );
}
