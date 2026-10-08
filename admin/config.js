window.MUBI_CONFIG = {
  SUPABASE_URL: "https://ycchdnnugjacqaqojtvp.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_d0rdksXSPd2ab7FZZZGxrw_oP7wzIpD",
  MEDIA_BUCKET: "media"
};
window.MUBI_SUPABASE = window.supabase.createClient(
  MUBI_CONFIG.SUPABASE_URL,
  MUBI_CONFIG.SUPABASE_PUBLISHABLE_KEY
);
