import json
from pathlib import Path

from yt_dlp import YoutubeDL

queries = {
    "pc_componentes": "partes do computador curso informática básica",
    "mouse_basico": "como usar o mouse do computador passo a passo",
    "teclado_basico": "como usar o teclado do computador iniciantes",
    "ligar_desligar": "como ligar e desligar o computador corretamente",
    "internet_oquee": "o que é internet para iniciantes",
    "navegadores": "o que é um navegador de internet e exemplos",
    "pesquisa_google": "como pesquisar no google passo a passo",
    "seguranca_online": "dicas de segurança na internet para iniciantes",
    "email_basico": "o que é email e como funciona",
    "enviar_email": "como enviar email no gmail passo a passo",
    "whatsapp_basico": "como usar whatsapp para iniciantes",
    "videochamada": "como fazer videochamada no whatsapp passo a passo",
    "etiqueta_digital": "etiqueta digital e golpes whatsapp",
    "govbr": "como criar conta gov.br prata",
    "agendamento_sus": "como agendar consulta no conecte sus",
    "documentos_online": "como emitir documentos no meu inss",
    "assinatura_digital": "como assinar documento no gov br",
    "senhas_fortes": "como criar senhas fortes e fáceis de lembrar",
    "verificacao_dupla": "como ativar verificação em duas etapas whatsapp",
    "antivirus": "como atualizar antivirus e windows",
    "pos_golpe": "o que fazer após golpe digital",
    "internet_banking": "como usar aplicativo do banco no celular",
    "pix_seguro": "como fazer pix com segurança",
    "compras_online": "dicas para compras online seguras",
    "orcamento_apps": "como controlar gastos com aplicativos financeiros",
}

results: dict[str, list[dict[str, str]]] = {}

ydl_opts = {
    "quiet": True,
    "skip_download": True,
    "extract_flat": False,
    "extractor_args": {"youtube": {"player_client": ["default"]}},
}

with YoutubeDL(ydl_opts) as ydl:
    for key, query in queries.items():
        info = ydl.extract_info(f"ytsearch5:{query}", download=False)
        entries = info.get("entries", []) if info else []
        parsed = []
        for entry in entries:
            parsed.append(
                {
                    "id": entry.get("id"),
                    "title": entry.get("title"),
                    "uploader": entry.get("uploader"),
                    "url": entry.get("webpage_url"),
                }
            )
        results[key] = parsed

output_path = Path("youtube_search_results.json")
output_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Resultados salvos em {output_path}")

