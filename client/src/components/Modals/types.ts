export type ModalCreateProps = {
  title: string | JSX.Element;
  children: any;
  active: boolean;
  hideModal: () => void;
};