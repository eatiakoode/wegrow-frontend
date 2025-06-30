const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/WeGrowInfraventurespvtltd/", icon: "fa-facebook" },
    { id: 2, liveLink: "https://x.com/wegrowinfra/", icon: "fa-x-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/wegrowinfraventures/", icon: "fa-instagram" },
    { id: 4, liveLink: "https://www.linkedin.com/company/wegrow-infraventures-pvt-ltd/", icon: "fa-linkedin-in" },
  ];

  
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
