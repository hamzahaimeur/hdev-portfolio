export type ToastState = {
  title: string;
  message: string;
  success: boolean;
  /** يتغير مع كل استدعاء لإعادة تشغيل الأنيميشن */
  key: number;
} | null;

type ToastProps = {
  toast: ToastState;
};

/**
 * يكرر بالضبط .success-toast الموجود في main.css / main.js الأصلي:
 * أيقونة + عنوان + نص + شريط تقدم مدته 4 ثوان، وكلاس "error" للحالة الفاشلة.
 */
export default function Toast({ toast }: ToastProps) {
  const success = toast?.success ?? true;

  return (
    <div
      key={toast?.key}
      className={`toast success-toast${toast ? " show" : ""}${success ? "" : " error"}`}
      role="status"
      aria-live="polite"
    >
      <div className="toast-icon">
        <i className={success ? "fa-solid fa-check" : "fa-solid fa-xmark"}></i>
      </div>

      <div className="toast-body">
        <h4>{toast?.title ?? "Message Sent"}</h4>
        <p>{toast?.message ?? "Thanks! I'll get back to you as soon as possible."}</p>
      </div>

      <div className="toast-progress"></div>
    </div>
  );
}
