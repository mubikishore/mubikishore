document.addEventListener("DOMContentLoaded", async () => {
  const { data: { session } } = await MUBI_SUPABASE.auth.getSession();
  const page = location.pathname.split("/").pop();
  if (!session && page !== "login.html") { location.href="/admin/login.html"; return; }
  document.querySelectorAll("[data-nav]").forEach(el => el.onclick=()=>location.href="/admin/"+el.dataset.nav+".html");
  const logout=document.querySelector("#logout");
  if(logout) logout.onclick=async()=>{await MUBI_SUPABASE.auth.signOut();location.href="/admin/login.html"};
});
function escapeHtml(v=""){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}