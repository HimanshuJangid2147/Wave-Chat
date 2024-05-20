import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[90%] md:w-[99%] rounded-lg overflow-hidden bg-zinc-900 bg-clip-padding 
		backdrop-filter backdrop-blur-lg bg-opacity-80 z-10 border-zinc-700'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
