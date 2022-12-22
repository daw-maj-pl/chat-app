const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/14494902/pexels-photo-14494902.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/14494902/pexels-photo-14494902.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
