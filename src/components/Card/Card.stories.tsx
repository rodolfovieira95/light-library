import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "iPhone 11",
  description:
    "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla. Tire fotos incríveis com pouca luz usando o modo Noite. Veja cores fiéis em fotos, vídeos e jogos na tela Liquid Retina de 6,1 polegadas***. Leve o desempenho sem precedentes do chip A13 Bionic para seus games, realidade aumentada e fotografia. Faça muito e recarregue pouco com a bateria para o dia todo**. E conte com resistência à água de até dois metros por até 30 minutos*.Avisos legais:*O iPhone 11 é resistente a respingos, água e poeira e foi testado em condições controladas em laboratório, classificado como IP68 segundo a norma IEC 60529 (profundidade máxima de até dois metros por até 30 minutos). A resistência a respingos, água e poeira não é uma condição permanente e pode diminuir com o tempo. Não tente recarregar um iPhone molhado. Veja instruções no Manual do Usuário para limpeza e secagem. Danos decorrentes de contato com líquidos não estão incluídos na garantia.",
  image: {
    src: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1664822592112-KRZQFJ3J20V9S9DRD5GC/iPhone+14.png?format=1000w",
    height: "200px",
    width: "200px",
  },
};
