# Pokemon App - Expo - React Native

**Índice**

1.  [Configuración de entornos de desarrollo para Android y iOS.](#id1)

2.  [Correr el proyecto de manera local.](#id2)

<div  id='id1'  />

## Instalación de dependencias:

- Node, Watchman y Yarn

```bash

~ brew install node

~ brew install watchman

~ brew install yarn

```

_si ya tiene instalado Node en su sistema, asegúrese de que sea **≥** Node v10._

- Kit de desarrollo de Java (JDK)

```bash

~ brew install --cask adoptopenjdk/openjdk/adoptopenjdk8

```

_si ya tiene instalado JDK en su sistema, asegúrese de que sea **≥** JDK v8._

- CocoaPods (Manejador de dependencias para Swift y Objective-C)

```bash

~ sudo gem install cocoapods

```

## Xcode:

- La manera más sencilla de instalar Xcode es a través de la <a  href="https://apps.apple.com/us/app/xcode/id497799835?mt=12"  target="\_blank">Mac App Store</a>. La instalación de Xcode también instalará el simulador de iOS y todas las herramientas necesarias para crear su aplicación iOS.

- Es necesario instalar las _Command Line Tools_ de Xcode.

Para eso hay que ejecutar Xcode, y en el menu de navegacion superior ir a **Xcode > Preferences > Locations** luego instale las herramientas seleccionando la versión más reciente en el menú desplegable **Command Line Tools**.

- Por ultimo debemos instalar un simulador de iOS, para eso volvemos al menu superior de Xcode y nos dirigimos a **Xcode > Preferences > Components** y seleccionamos e instalamos el simulador con la versión correspondiente de iOS que deseamos utilizar.

_si ya tiene instalado Xcode en su sistema, asegúrese de que sea **≥** Xcode v9.4._

## Configurar AVD:

- En primer lugar debemos tener instalado <a  href="https://developer.android.com/studio"  target="\_blank">Android Studio</a>.

Una vez que tengamos abierto nuestro programa, nos vamos a la parte inferior derecha y selecionamos **Configure > AVD Manager** .

Nos abrirá la ventana donde se administran los dispositivos virtuales previamente instalados y le damos click a **+ Create Virtual Device**,

esto nos abrirá la lista de emuladores disponibles para instalar, es importante seleccionar un dispositivo que tenga la resolución lo mas baja posible, ya que así el uso de memoria sera menor.

En la siguiente pantalla nos toca elegir el sistema a utilizar, se recomienda usar los mas recientes, luego en la ultima pantalla podemos asignar un nombre al virtual device que acabamos de crear y seleccionar la orientacion inicial de la pantalla, una vez terminado esto seleccionamos el boton **Finish**.

- Para inicializar el **AVD** ejecute **Android Studio**, en la parte inferior derecha le damos click a **Configuracion > AVD Manager**, selecionamos cualquiera de nuestros virtual devices anteriormente creados y le damos _play_.

## Instalación SDK de Android:

**1.** Android Studio instala el último SDK de Android de forma predeterminada. Sin embargo, la creación de una aplicación React Native con código nativo requiere el SDK de **Android 10 (Q)** en particular. Se pueden instalar SDK de Android adicionales a través del SDK Manager en Android Studio.

Para hacerlo, abra Android Studio, en la parte inferior derecha haga click en el botón **Configurar > SDK Manager**.

**2.** Seleccione la pestaña **Plataformas SDK** y luego marque la casilla **Mostrar detalles del paquete** en la esquina inferior derecha. Busque y expanda la opcion **Android 10 (Q)**, luego asegúrese de que los siguientes elementos estén marcados:

- _Android SDK Platform 30_

- _Intel x86 Atom-64 System Image_

- _Google APIs Intel x86 Atom System Image_

**3.** Luego seleccione la pestaña **Herramientas del SDK** y marque la casilla **Mostrar detalles del paquete**. Busque y expanda la entrada **Android SDK Build-Tools** y asegúrese de que **30.0.2** esté seleccionada.

**4.** Finalmente, haga clic en **Aplicar** para descargar e instalar el SDK de Android y las herramientas de compilación relacionadas.

## Configurar las variables de entorno ANDROID_HOME:

- Agregue las siguientes líneas a su archivo de configuración _\$HOME/.bash_profile_ o _\$HOME/.bashrc_

(si está usando zsh entonces _~/.zprofile_ o _~/.zshrc_):

```bash

export ANDROID_HOME=$HOME/Library/Android/sdk

export PATH=$PATH:$ANDROID_HOME/emulator

export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:$ANDROID_HOME/tools/bin

export PATH=$PATH:$ANDROID_HOME/platform-tools

```

- Para cargar la configuración en su shell actual escriba:

para **bash**:

```bash

~  source  $HOME/.bash_profile

```

para **zsh**:

```bash

~  source  $HOME/.zshrc

```

- Verifique que _ANDROID_HOME_ se haya configurado y que se hayan agregado los directorios apropiados a su ruta ejecutando los 2 comandos siguientes:

```bash

~  echo  $ANDROID_HOME

~  echo  $PATH

```

<div  id='id2'  />

## Instalación CLI de Expo React Native:

- Ejecutar la siguiente linea de comando:

````bash

~ yarn global add expo-cli


## Ejucutar el proyecto de manera local:

**1.** Clonar el repositorio:

```bash

~ git clone git@github.com:/dorisjpch/pokeapp-expo-rn

````

**2.** Instalar dependencias sobre la carpeta **.pokeapp-expo-rn**:

```bash

~ yarn

```

_Para iniciar ejecutar el siguiente comando:_

```bash

~ yarn start

```
