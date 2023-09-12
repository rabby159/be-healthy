import boy1 from '../../assets/images/boy1.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center container m-auto my-5 pb-4 border-b-2'>
            <h1 className='text-5xl font-bold text-blue-600'>Be Healthy</h1>
            <img className='w-14' src={boy1} alt="" />
        </div>
    );
};

export default Header;