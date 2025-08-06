import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, organization, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Nome, email e mensagem são obrigatórios' },
                { status: 400 }
            );
        }

        const mailerSendApiKey = process.env.MAILERSEND_API_KEY;

        if (!mailerSendApiKey) {
            console.error('MAILERSEND_API_KEY não configurada');
            return NextResponse.json(
                { error: 'Configuração do servidor incompleta' },
                { status: 500 }
            );
        }

        const emailData = {
            from: {
                email: "noreply@tomasploureiro.me",
                name: "Portfolio Contact Form"
            },
            to: [
                {
                    email: "tompinlou@gmail.com",
                    name: "Tomás Loureiro"
                }
            ],
            subject: `Nova mensagem de contacto de ${name}`,
            html: `
                <h2>Nova mensagem de contacto</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${organization ? `<p><strong>Organização:</strong> ${organization}</p>` : ''}
                <h3>Mensagem:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
                
                <hr>
                <p><small>Esta mensagem foi enviada através do formulário de contacto do portfolio.</small></p>
            `,
            text: `
                Nova mensagem de contacto
                
                Nome: ${name}
                Email: ${email}
                ${organization ? `Organização: ${organization}` : ''}
                
                Mensagem:
                ${message}
                
                ---
                Esta mensagem foi enviada através do formulário de contacto do portfolio.
            `
        };

        const response = await fetch('https://api.mailersend.com/v1/email', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${mailerSendApiKey}`,
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(emailData)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro do MailerSend:', errorText);
            return NextResponse.json(
                { error: 'Erro ao enviar email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Email enviado com sucesso' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Erro na API de contacto:', error);
        return NextResponse.json(
            { error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}
