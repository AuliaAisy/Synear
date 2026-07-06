const notifications=[
{
    icon:"bi-check-circle-fill",
    title:"Registration Successful",
    message:"You have successfully registered for UI/UX Design Seminar.",
    time:"2 minutes ago",
    class:"success"
},
{
    icon:"bi-credit-card-fill",
    title:"Payment Confirmed",
    message:"Your payment has been successfully verified.",
    time:"1 hour ago",
    class:"info"
},
{
    icon:"bi-alarm-fill",
    title:"Seminar Reminder",
    message:"Your seminar starts tomorrow at 09.00 WIB.",
    time:"Yesterday",
    class:"warning"
},
{
    icon:"bi-award-fill",
    title:"Certificate Available",
    message:"Your seminar certificate is now available.",
    time:"Yesterday",
    class:"certificate"
}
];

const list=document.getElementById("notificationList");

notifications.forEach(item=>{

list.innerHTML+=`

<div class="notification-card">

<div class="notification-icon ${item.class}">
<i class="bi ${item.icon}"></i>
</div>

<div class="notification-content">

<h5>${item.title}</h5>

<p>${item.message}</p>

<span class="notification-time">${item.time}</span>

</div>

</div>

`;

});