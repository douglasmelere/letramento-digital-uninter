import os
from typing import List, Dict

import cv2
import numpy as np
from fpdf import FPDF


MODULES: List[Dict[str, object]] = [
    {
        "slug": "module-1-introducao",
        "title": "Introdução ao Computador",
        "color": (79, 129, 189),
        "messages": [
            "Conheça cada parte do computador",
            "Aprenda postura correta e liga/desliga seguro",
        ],
        "tips": [
            "Identifique monitor, gabinete, mouse e teclado",
            "Revise sequência de ligar e desligar",
            "Use o mouse para selecionar e arrastar com calma",
            "Mantenha a área organizada para evitar acidentes",
        ],
    },
    {
        "slug": "module-2-internet",
        "title": "Navegação na Internet",
        "color": (46, 134, 171),
        "messages": [
            "Pesquise com confiança",
            "Organize favoritos e navegue com segurança",
        ],
        "tips": [
            "Teste sua conexão e abra um navegador confiável",
            "Use palavras-chave simples nas pesquisas",
            "Favoritos ajudam a voltar rápido em sites importantes",
            "Observe o cadeado https antes de preencher dados",
        ],
    },
    {
        "slug": "module-3-comunicacao",
        "title": "Comunicação Digital",
        "color": (233, 120, 75),
        "messages": [
            "Mensagens claras e gentis",
            "Use e-mail e WhatsApp com segurança",
        ],
        "tips": [
            "Confirme destinatários antes de enviar mensagens",
            "Compartilhe somente o necessário em grupos",
            "Teste microfone e câmera antes de videochamadas",
            "Silencie notificações excessivas para evitar distrações",
        ],
    },
    {
        "slug": "module-4-servicos",
        "title": "Serviços Públicos Online",
        "color": (33, 150, 139),
        "messages": [
            "Use gov.br para resolver demandas",
            "Organize documentos digitais",
        ],
        "tips": [
            "Mantenha CPF e dados atualizados no gov.br",
            "Baixe comprovantes em PDF e salve em pastas nomeadas",
            "Ative notificações no Conecte SUS para lembretes",
            "Confira protocolos de atendimento e prazos",
        ],
    },
    {
        "slug": "module-5-seguranca",
        "title": "Segurança Digital e Privacidade",
        "color": (123, 97, 255),
        "messages": [
            "Proteja senhas e dispositivos",
            "Saiba agir diante de golpes",
        ],
        "tips": [
            "Crie senhas longas e exclusivas",
            "Ative verificação em duas etapas nos principais apps",
            "Atualize antivírus e sistema semanalmente",
            "Guarde contatos de emergência digital para suporte rápido",
        ],
    },
    {
        "slug": "module-6-financas",
        "title": "Finanças Digitais e Pagamentos",
        "color": (225, 98, 133),
        "messages": [
            "Use apps bancários com segurança",
            "Controle orçamento pelo celular",
        ],
        "tips": [
            "Baixe apps oficiais das lojas Google/Apple",
            "Verifique nome do destinatário antes de confirmar PIX",
            "Prefira cartões virtuais em compras online",
            "Revise gastos semanais para ajustar metas",
        ],
    },
]

WIDTH, HEIGHT = 1280, 720
FPS = 24
DURATION = 8  # seconds


def ensure_directories() -> tuple[str, str]:
    base_media = os.path.join("public", "media")
    base_resources = os.path.join("public", "resources")
    os.makedirs(base_media, exist_ok=True)
    os.makedirs(base_resources, exist_ok=True)
    return base_media, base_resources


def save_pdf(module: Dict[str, object], base_path: str) -> None:
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Helvetica", "B", 20)
    pdf.cell(0, 12, f"Guia Rápido - {module['title']}", ln=True)
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 14)
    pdf.multi_cell(
        0,
        9,
        "Resumo do que você precisa observar antes de praticar as atividades deste módulo:",
    )
    pdf.ln(4)
    pdf.set_font("Helvetica", "", 13)
    for tip in module["tips"]:
        pdf.multi_cell(0, 8, f"- {tip}")
    pdf.ln(6)
    pdf.set_font("Helvetica", "I", 11)
    pdf.multi_cell(
        0,
        7,
        "Use este material como lembrete rápido durante as aulas e marque quais etapas já realizou.",
    )
    output_path = os.path.join(base_path, f"{module['slug']}.pdf")
    pdf.output(output_path)


def save_video(module: Dict[str, object], base_path: str) -> None:
    frames = FPS * DURATION
    output_path = os.path.join(base_path, f"{module['slug']}.mp4")
    writer = cv2.VideoWriter(
        output_path, cv2.VideoWriter_fourcc(*"mp4v"), FPS, (WIDTH, HEIGHT)
    )
    base_color = module["color"]

    for i in range(frames):
        alpha = i / frames
        gradient = (
            int(base_color[2] + alpha * (255 - base_color[2])),
            int(base_color[1] + alpha * (255 - base_color[1])),
            int(base_color[0] + alpha * (255 - base_color[0])),
        )
        bg = np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)
        bg[:] = gradient

        cv2.rectangle(bg, (60, 60), (WIDTH - 60, HEIGHT - 60), (255, 255, 255), 4)
        cv2.putText(
            bg,
            module["title"],
            (90, 160),
            cv2.FONT_HERSHEY_SIMPLEX,
            1.4,
            (30, 30, 60),
            3,
            cv2.LINE_AA,
        )

        for idx, message in enumerate(module["messages"]):
            y = 260 + idx * 80
            cv2.putText(
                bg,
                f"- {message}",
                (110, y),
                cv2.FONT_HERSHEY_SIMPLEX,
                1.0,
                (20, 20, 20),
                2,
                cv2.LINE_AA,
            )

        cv2.putText(
            bg,
            "Dica: revise o guia em PDF antes de praticar",
            (90, HEIGHT - 140),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.9,
            (50, 50, 50),
            2,
            cv2.LINE_AA,
        )
        cv2.putText(
            bg,
            "Plataforma de Letramento Digital",
            (90, HEIGHT - 80),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.9,
            (90, 90, 110),
            2,
            cv2.LINE_AA,
        )

        writer.write(bg)

    writer.release()


def main() -> None:
    media_dir, resources_dir = ensure_directories()
    for module in MODULES:
        save_pdf(module, resources_dir)
        save_video(module, media_dir)
    print("Assets gerados com sucesso.")


if __name__ == "__main__":
    main()

