# Info pro kluky na setup

!! Kdyby vám nešlo vkládat text do terminálu, zkuste Ctrl+Shift+V

Tady je tutoriál, jak stáhnout a připravit si prostředí na programování. Následujte kroky a půjde to.

Nebudu vysvětlovat, jak všechno funguje, to kdyžtak napište nebo koukněte na internet.

První otevřete terminál PowerShell jako správce.

Pak spusťte příkaz:

```powershell
wsl --install
```

Mělo by to stáhnout a nainstalovat Ubuntu

Pak Ubuntu můžete spouštět jako každou jinou aplikaci. Spusťte ji a otevře se terminál, který už je jako linux.

Až otevřete Ubuntu, zadejte příkaz se změněným emailem a všechno ignorujte a ťukejte na enter, dokud se příkaz nedokončí

```bash
ssh-keygen -t ed25519 -C "your_email@example.com" && ssh-add ~/.ssh/id_ed25519
```

Potom spusťte a zkopírujte výsledek tohoto příkazu:

```bash
cat ~/.ssh/id_ed25519.pub
```

Na [githubu (tady)](https://github.com/settings/keys) klikni na 'New SSH key' tlačítko (je velké a zelené)

Výsledek předchozího příkazu vložte a nazvěte si to, jak chcete.

Potom spusťte následující příkaz a mělo by se vypsat pozdrav s vaším jménem

```bash
ssh git@github.com
```

Potom už jenom spusťte tyhle příkazy a upravte si je, aby v nich byli údaje, které používáte na githubu

```bash
git config --global user.name "Tvoje jméno"

git config --global user.email "Tvůj@email"
```

Pak už poslední příkaz:

```bash
```