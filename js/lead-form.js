(()=> {
 const email="contact@nexovent.tech";
 const draft=(subject,body)=>{window.location.href="mailto:"+email+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body)};
 const form=document.getElementById("estimator-form");
 if(form) form.addEventListener("submit",event=>{
  event.preventDefault(); if(!form.reportValidity()) return;
  const data=new FormData(form);
  const types=[...form.querySelectorAll('[name="projectType"]:checked')].map(x=>x.nextElementSibling.childNodes[0].textContent.trim());
  const scopes=[...form.querySelectorAll('[name="scope"]:checked')].map(x=>x.value);
  const budget=form.querySelector('[name="budget"]:checked')?.nextElementSibling.innerText.replace(/\n/g," — ")||"Not selected";
  const lines=["Hello Nexovent Tech,","","I'd like to discuss a project.","","Name: "+data.get("name"),"Email: "+data.get("email"),"Business: "+(data.get("business")||"Not provided"),"Project types: "+(types.join(", ")||"Not selected"),"Requested work: "+(scopes.join(", ")||"Not specified"),"Budget: "+budget,"Currency: "+data.get("currency"),"Timeline: "+data.get("timeline"),"Reference: "+(data.get("links")||"Not provided"),"","Notes:",data.get("notes")||"None","","I understand pricing is indicative and final scope will be confirmed in writing.","","Thank you."];
  draft("New project enquiry — "+(data.get("business")||data.get("name")),lines.join("\n"));
 });
 const contact=document.getElementById("contact-form");
 if(contact) contact.addEventListener("submit",event=>{
  event.preventDefault(); if(!contact.reportValidity()) return;
  const data=new FormData(contact);
  draft("Website enquiry — "+data.get("subject"),"Hello Nexovent Tech,\n\nName: "+data.get("name")+"\nEmail: "+data.get("email")+"\nSubject: "+data.get("subject")+"\n\nMessage:\n"+data.get("message"));
 });
})();