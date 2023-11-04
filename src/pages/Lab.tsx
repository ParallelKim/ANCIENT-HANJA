export const Lab = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const noti = new Notification("test", { body: "잘되나" });
          console.log(noti);
        }}
      >
        dsfafd
      </button>
    </div>
  );
};
