import free from '../../public/images/icon-free.svg'
import paid from '../../public/images/icon-paid.svg'
const Plan = () => {
  return (
    <section className="max-w-[1000px] mx-auto my-32 p-4">
      <h2 className="text-3xl text-white font-bold text-center">
        Our pricing plans
      </h2>
      <p className="text-gray-400 text-center my-4 lg:max-w-[50%] mx-auto">
        We only make money when our creators make money. Our plans are always
        affordable, and it's completely free to get started.
      </p>
      <div className="flex flex-col  gap-20 my-20 items-center lg:flex-row justify-center"> 
            <div className="bg-[#093E67] p-10 rounded-2xl relative flex-1 lg:flex-[0.42] max-w-[400px] w-full free">
                <img src={free} alt="" className='absolute -top-6 w-14 h-14 object-contain' />
                <h3 className="text-white font-bold text-xl my-4">Dip your toe</h3>
                <p className="text-gray-300 mb-8">Just getting started? No problem at all! Our free plan will take you a long way.</p>
                <h4 className="font-bold text-4xl text-white my-5">Free</h4>
                <ul className="text-gray-200 flex flex-col gap-4">
                    <li>Unlimited products</li>
                    <li>Basic analytics</li>
                    <li>Limited marketplace exposure</li>
                    <li>10% fee per transaction</li>
                </ul>
            </div>
            <div className="bg-[#3EEAE7] p-10 rounded-2xl relative flex-1 lg:flex-[0.5] text-[#093E67] max-w-[400px] w-full paid">
                <img src={paid} alt=""   className='absolute -top-6 w-14 h-14 object-contain' />
                <h3  className="text-white font-bold text-xl my-4 mt-8">Dive right in</h3>
                <p className="mb-8 ">Ready for the big time? Our paid plan will help you take your business to the next level.</p>
                <h4 className="font-bold text-4xl my-5 flex items-center gap-4">$25.00 <span className='!text-[1rem] !font-normal'>/ month</span></h4>
                <ul className=" flex flex-col gap-4">
                    <li>Custom domain</li>
                    <li>Basic analytics</li>
                    <li>Limited marketplace exposure</li>
                    <li>10% fee per transaction</li>
                </ul>
            </div>
      </div>
    </section>
  );
};

export default Plan;
