import { Typography } from '@creativelabfront/ui/components/typography';
import earlenerFlaskCartoons from '../assets/images/earlener-flask-cartoons-big.svg';

export const LastJobPosition = () => {
  return (
    <div className="flex flex-col relative min-h-[550px] justify-center items-center ">
      <img className="absolute left-0 z-0" src={earlenerFlaskCartoons} />
      <Typography variant="2xl" className="font-lora italic text-center px-20 leading-13 z-1">
        My last job position was a software engineer in Asan Pardakht Persia (APP), A fast paced
        environment company with vibrant and engaging atmosphere, I’ve participated in Invi product
        which is stands for gold trading market of APP, We followed Agile methodology and at the end
        of each sprint we released a new service, we hit our forth finance targets in a month.
      </Typography>
    </div>
  );
};
